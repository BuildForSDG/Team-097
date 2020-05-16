from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserProfile(models.Model):
    """
    UserProfile Model
    user: owner of the profile and a OneToOne relationship to the user
    full_name: firstname and lastname of the user, a charfield with maximum lenght of 200
    phone: The user's contact which is an integer field
    profile_pic: an image field to be uploaded to media/ProfilePictures
    joined: The date the user joined
    groups: The groups a user belongs to.. commented out for reconsideration
    location: The current user address. in contrast with the ER Diagram which has location as a separate table ER implementation is down the file

    Added null and blank = True to some fields in case of empty values
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200, null=True, blank=True)
    phone = models.IntegerField(null=True, blank=True)
    profile_pic = models.ImageField(upload_to='ProfilePictures', blank=True, null=True)
    joined = models.DateField(auto_now_add=True)
    location = models.TextField(blank=True, null=True)
    #groups = models.ForeignKey('Group', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        """
        :return: A string representation of the model using user's username
        """
        return self.user.username

class UserInterest(models.Model):
    """
    Database model for interest of users
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    interest_type = models.CharField(max_length=200)

    def __str__(self):
        """
        :return: same as the UserProfile model
        """
        return self.user.username

class UserSkill(models.Model):
    """
    Database model for UserSkills
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skill_type = models.CharField(max_length=200)

    def __str__(self):
        return self.user.username

class UserEducation(models.Model):
    """
    Database Model for the user educational background.
    Added extra fields in contrast to the Entity Relationship diagram
    education_type: University, secondary education or any other
    discipline: user's area of specialization

    Fields can be modified or added if neccessary
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    education_type = models.CharField(max_length=200)
    institution_name = models.CharField(max_length=200)
    discipline = models.CharField(max_length=200)

    def __str__(self):
        return self.user.username


class Group(models.Model):
    """
    Database Model for platform groups
    The commented created_by field is to allow user to create a group and own the group.. Thought it wasn't neccessary
    """
    group_name = models.CharField(max_length=200)
    date_created = models.DateField(auto_now_add=True)
    #members = models.ManyToManyField('GroupMember')
    # created_by = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.group_name


class Post(models.Model):
    """
    Database model for user posts in a group.
    media: for images... can be blank for text_posts
    """
    post_text = models.TextField()
    media = models.ImageField(upload_to='MediaPosts', blank=True)
    metatags = models.ForeignKey('MetaTag', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.username
    #class Meta:
        #abstract = True

class PostLike(models.Model):
    """
    A Database model for all likes to a post
    actor: The performer of the like event
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    actor = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.actor.username

    #class Meta:
        #abstract = True

class PostComment(models.Model):
    """
        A Database model for all comments to a post
        actor: The performer of the comment event
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.TextField()
    actor = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.actor.username

    #class Meta:
        #abstract = True


class MetaTag(models.Model):
    tag = models.CharField(max_length=200)

    def __str__(self):
        return self.tag


class GroupMember(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username




"""

#ABSTRACT CLASS INHERITANCE
class TextPost(Post):
    pass

class VideoPost(Post):
    media = models.FileField(upload_to='VideoPost')

class ImagePost(Post):
    pass

class TextPostLike(PostLike):
    post = models.ForeignKey(TextPost, on_delete=models.CASCADE)

class VideoPostLike(PostLike):
    post = models.ForeignKey(VideoPost, on_delete=models.CASCADE)

class ImagePostLike(PostLike):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class TextPostComment(PostComment):
    post = models.ForeignKey(TextPost, on_delete=models.CASCADE)

class VideoPostComment(PostComment):
    post = models.ForeignKey(VideoPost, on_delete=models.CASCADE)

class ImagePostComment(PostComment):
    post = models.ForeignKey(ImagePost, on_delete=models.CASCADE)


#I DON'T UNDERSTAND THE ERD FOR THESE SO I DECIDED TO LEAVE IT OUT
class Connection(models.Model):
    user_1 = models.OneToOneField(User, on_delete=models.CASCADE)
    user_2 = models.OneToOneField(User, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    #action user field!!!
 
class Message(models.Model):
    connection = models.OneToOneField(Connection)
    message_text = models.TextField()
    msg_datetime = models.DateTimeField(auto_now_add=True)

#ER DIAGRAM IMPLEMENTATION OF THE LOCATION ATTRIBUTE IN THE USERPROFILE MODEL    
class UserLocation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField()
    location_details = models.TextField()

    def __str__(self):
        return self.user.username

"""