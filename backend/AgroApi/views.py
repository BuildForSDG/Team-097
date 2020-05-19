from django.shortcuts import render
from .models import UserProfile,Post as posts,PostComment,Connection,Group
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.decorators import api_view,action
from rest_framework import generics
from rest_framework import viewsets
from .serializers import (UserSerializer, UserProfileSerializer,PostSerializer,
                        PostCommentSerializer,ConnectionSerializer,GroupSerializer)
from rest_framework.reverse import reverse
from django.db.models import Q


# Create your views here.

# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'users_profile': reverse('user_profile', request=request, format=format),
#         'signup': reverse('signup', request=request, format=format),
#         'login': reverse('login', request=request, format=format),
#         'post': reverse('posts', request=request, format=format),
#         # 'post_detail': reverse('post_detail', args=[], request=request, format=format),
#         'comments': reverse('post_comment', request=request, format=format),
#         'contacts': reverse('user_contacts', request=request, format=format),
#         'groups': reverse('groups', request=request, format=format),
#         # 'group_posts': reverse('group_post', request=request, format=format),
#         # 'group_detail': reverse('group_detail', args=[Groups], request=request, format=format),
#     })


class SignUp(viewsets.ViewSet):
    authentication_classes = ()
    permission_classes = ()
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


class Login(viewsets.ViewSet):
    permission_classes = ()
    def create(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            return Response({"token": user.auth_token.key})
        else:
            return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(viewsets.ViewSet):
    """
    An API endpoint that accepts both Post and Get request for a UserProfile
    """
    serializer_class = UserProfileSerializer
    def retrieve(self, request):
        """
        get the profile of a logged in user
        :return: Profile Details
        """
        profile = UserProfile.objects.get(user=self.request.user)
        serialized_profile = UserProfileSerializer(profile)
        return Response(serialized_profile.data)

    def create(self, request):
        """
        Update a user Profile... for now only allows phone, location and State update.
        :param request:
        :return: The updated profile
        """
        profile = UserProfile.objects.get(user=request.user)
        profile.phone = request.data.get('phone')
        profile.address_1 = request.data.get('address_1')
        profile.address_2 = request.data.get('address_2')
        profile.state = request.data.get('state')
        serialized_profile = UserProfileSerializer(profile)
        profile.save()
        return Response(serialized_profile.data, status=status.HTTP_200_OK)

class Post(viewsets.ModelViewSet):
    queryset = posts.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    # def get_queryset(self):
    #     connections = Connection.objects.get(
    #         Q(user_1=self.request.user)|
    #         Q(user_2=self.request.user),
    #         Q(status=1)
            
    #         )
    #     return posts.objects.filter(user=connections, group__members=self.request.user)


class PostComment(viewsets.ViewSet):
    def create(self, request):
        serializer = PostCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response (serializer.error, status=status.HTTP_400_BAD_REQUEST)
 


class Contacts(viewsets.ViewSet):
    def list(self, request):
        query = Connection.objects.filter(
            Q(user_1=self.request.user)|
            Q(user_2=self.request.user),
            Q(status=1)
        
        
        )
        serializer = ConnectionSerializer(query, many=True)
        return Response(serializer.data)
    

class Groups(viewsets.ViewSet):
    def list(self, request):
        query = Group.objects.all()
        serializer = GroupSerializer(query, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        query = Group.objects.get(pk=pk)
        serializer = GroupSerializer(query)
        return Response(serializer.data)
        

# class GroupPost(APIView):
#     def get(self, request, pk):
#         post = posts.Objects.filter(group=pk)
#         serializer = PostSerializer(post, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
