from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200, null=True, blank=True)
    phone = models.IntegerField(null=True, blank=True)
    profile_pic = models.ImageField(upload_to='ProfilePictures')
    joined = models.DateField(auto_now_add=True)
    groups = models.ForeignKey('Group', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.full_name

class UserInterest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    interest_type = models.CharField(max_length=200)

class UserSkill(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skill_type = models.CharField(max_length=200)

class UserEducation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    education_type = models.CharField(max_length=200)
    institution_name = models.CharField(max_length=200)
    discipline = models.CharField(max_length=200)

class UserLocation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    location_details = models.TextField()

class Group(models.Model):
    group_name = models.CharField(max_length=200)
    created_by = models.OneToOneField(User, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True)
    members = models.ManyToManyField('GroupMember')
    #Think this is a better implemetation
    posts = models.ForeignKey('Post', on_delete=models.CASCADE, null=True, blank=True)

class Post(models.Model):
    post_text = models.TextField()
    media = models.ImageField(upload_to='MediaPosts')
    metatags = models.ForeignKey('MetaTags', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    #Really think the group should'nt be here
    #group = models.ForeignKey(Group, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True)

    #class Meta:
        #abstract = True

"""class TextPost(Post):
    pass

class VideoPost(Post):
    media = models.FileField(upload_to='VideoPost')

class ImagePost(Post):
    pass

"""
class PostLike(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    liker = models.OneToOneField(User, on_delete=models.CASCADE)

    #class Meta:
        #abstract = True
"""class TextPostLike(PostLike):
    post = models.ForeignKey(TextPost, on_delete=models.CASCADE)

class VideoPostLike(PostLike):
    post = models.ForeignKey(VideoPost, on_delete=models.CASCADE)

class ImagePostLike(PostLike):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
"""


class PostComment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.TextField()
    actor = models.OneToOneField(User, on_delete=models.CASCADE)

    #class Meta:
        #abstract = True

"""class TextPostComment(PostComment):
    post = models.ForeignKey(TextPost, on_delete=models.CASCADE)

class VideoPostComment(PostComment):
    post = models.ForeignKey(VideoPost, on_delete=models.CASCADE)

class ImagePostComment(PostComment):
    post = models.ForeignKey(ImagePost, on_delete=models.CASCADE)
"""

"""class Connection(models.Model):
    user_1 = models.OneToOneField(User, on_delete=models.CASCADE)
    user_2 = models.OneToOneField(User, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    #action user field!!!
"""

class Message(models.Model):
    message_text = models.TextField()
    msg_datetime = models.DateTimeField(auto_now_add=True)

class MetaTags(models.Model):
    tag = models.CharField(max_length=200)

class GroupMember(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
""" ER DIAGRAM IMPOLEMENTATION
class Message(models.Model):
    connection = models.OneToOneField(Connection)
    message_text = models.TextField()
    msg_datetime = models.DateTimeField(auto_now_add=True)
    
class GroupMember(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    user = models.OneToOneField(User)
"""







