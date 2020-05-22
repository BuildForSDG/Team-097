from django.shortcuts import render,get_object_or_404
from django.contrib.auth.models import User
from .models import UserProfile,Post as posts,PostComment,Userfollowers,Group,GroupMember,Likes,CommentReply
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework import viewsets
from .serializers import (UserSerializer, UserProfileSerializer,PostSerializer,
                        PostCommentSerializer,UserFollowerSerializer,GroupSerializer,GroupMemberSerializer, LikeSerializer,
                        CommentReplySerializer )
from django.db.models import Q


class UserProfileView(viewsets.ViewSet):
    """
    An API endpoint that accepts both Post and Get request for a UserProfile
    """
    def list(self, request):
        """
        get the profile of a logged in user
        :return: Profile Details
        """
        profile = UserProfile.objects.get(user=request.user)
        serialized_profile = UserProfileSerializer(profile)
        return Response(serialized_profile.data)

    def update(self, request, pk=None):
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
    """
    Api endipoint for post 
    """
    queryset = posts.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    

class Like(viewsets.ViewSet):
    """
    Api endipoint for likes 
    """
    def create(self, request):
        serializer = LikeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response (serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self, request, pk=None):
        likes = Likes.objects.get(pk=pk)
        serializer = LikeSerializer(likes)
        return Response(serializer.data, status=status.HTTP_200_OK)
       


## post by user and for user
class PostComment(viewsets.ViewSet):
    """
    Api endipoint for post comments
    """
    def create(self, request):
        serializer = PostCommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response (serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self, request, pk=None):
        comment = PostComment.objects.get(pk=pk)
        serializer = PostCommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CommentReply(viewsets.ViewSet):
    """
    Api endipoint for comment reply
    """
    def create(self, request):
        serializer = CommentReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response (serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    def retrieve(self, request, pk=None):
        reply = CommentReply.objects.get(pk=pk)
        serializer = PostCommentSerializer(reply)
        return Response(serializer.data, status=status.HTTP_200_OK)


class People(viewsets.ViewSet): ## People
    """
    Api endipoint for people 
    """
    def list(self, request):
        query = User.objects.exclude(username=request.user)
        serializer = UserSerializer(query, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        query = User.objects.all()
        detail = get_object_or_404(query, pk=pk)
        serializer = UserSerializer(detail)
        return Response(serializer.data, status=status.HTTP_200_OK)


class FollowPeople(viewsets.ViewSet):
    """
    Api endipoint to follow people 
    """
    def partial_update(self, request, pk=None):
        login_user = UserFollowers.objects.get(user=request.user)
        user = request.data.get('user_id')
        serializer = UserFollowerSerializer(login_user, data={'user_2':user}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response (serializer.error, status=status.HTTP_400_BAD_REQUEST)


class UserFollowers(viewsets.ViewSet): ## user followers
    """
    Api endipoint for user followers
    """
    def list(self, request):
        query = Userfollowers.objects.filter(user_1=request.user)
        serializer = UserFollowerSerializer(query, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class Groups(viewsets.ViewSet):
    """
    Api endipoint for Groups 
    """
    def list(self, request):
        query = Group.objects.all()
        serializer = GroupSerializer(query, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None): ##remeber to count members fields
        query = Group.objects.get(pk=pk)
        serializer = GroupSerializer(query)
        return Response(serializer.data)

class GroupPost(viewsets.ViewSet):
    """
    Api endipoint for displaying group posts 
    """
    def retrieve(self, request, pk=None):
        group_id = Group.objects.get(pk=pk)
        post = posts.objects.filter(group=group_id)
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)   
    


## issues