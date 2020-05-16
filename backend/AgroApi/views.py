from django.shortcuts import render
from .models import UserProfile
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import UserSerializer, UserProfileSerializer,PostSerializer,PostCommentSerializer,ConnectionSerializer


# Create your views here.
class SignUp(generics.CreateAPIView):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = UserSerializer

class Login(APIView):
    permission_classes = ()
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            return Response({"token": user.auth_token.key})
        else:
            return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    """
    An API endpoint that accepts both Post and Get request for a UserProfile
    """
    serializer_class = UserProfileSerializer
    def get(self, request):
        """
        get the profile of a logged in user
        :return: Profile Details
        """
        profile = UserProfile.objects.get(user=self.request.user)
        serialized_profile = UserProfileSerializer(profile)
        return Response(serialized_profile.data)

    def post(self, request):
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

class Post(generics.ListCreateAPIView):
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        connections = Connection.objects.get(
            Q(user_1=self.request.user)|
            Q(user_2=self.request.user),
            Q(status='Accepted')
            
            )
        return Post.objects.filter(user=connections)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
     serializer_class = PostSerializer   

     def get_queryset(self):
         return Post.objects.all()


class PostComment(generics.CreateAPIView):
    serializer_class = PostCommentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class Contacts(generics.ListAPIView):
    serializer_class = ConnectionSerializer

    def get_queryset(self):
        return Connection.objects.filter(
            Q(user_1=self.request.user)|
            Q(user_2=self.request.user),
            Q(status='Accepted')
        
        
        )

# class Groups(generics.):
#     pass