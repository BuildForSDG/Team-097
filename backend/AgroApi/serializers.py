from rest_framework import serializers
from .models import UserProfile, UserInterest, UserEducation, UserSkill, Post, Group, GroupMember, MetaTag, PostComment,Userfollowers,Activity,Likes,Events,CommentReply
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        profile = UserProfile(user=user)
        profile.save()
        Token.objects.create(user=user)
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInterest
        fields = '__all__'

class UserSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkill
        fields = '__all__'

class UserEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEducation
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'

class GroupMemberSerializer(serializers.ModelSerializer): ##remember to add unique_together field
    class Meta:
        model = GroupMember
        fields = '__all__'

class MetaTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetaTag
        fields = '__all__'

class PostCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ['comment', 'user']

class CommentReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentReply
        fields = ['comment', 'user']


class UserFollowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userfollowers
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'