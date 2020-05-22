from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserProfile(models.Model):
    """
    UserProfile Model
    user: owner of the profile and a OneToOne relationship to the user
    full_name: firstname and lastname of the user, a charfield with maximum lenght of 200
    ## No need of full name as user model already contains firstname and lastname fields
        also date date joined date it is also contained in the user model
     ##
    phone: The user's contact which is an integer field
    profile_pic: an image field to be uploaded to media/ProfilePictures
    joined: The date the user joined
    groups: The groups a user belongs to.. commented out for reconsideration
    location: The current user address. in contrast with the ER Diagram which has location as a separate table ER implementation is down the file
    ### Reason i added location table is to allow users add mutiple address, we will create a choice
    field for the states e.g lagos, ogun etc.

    Added null and blank = True to some fields in case of empty values
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.IntegerField(null=True, blank=True)
    profile_pic = models.ImageField(upload_to='ProfilePictures', blank=True, null=True)
    address_1 = models.TextField(blank=True, null=True)
    address_2 = models.TextField(blank=True, null=True)
    state = models.CharField(max_length=200, blank=True, null=True)


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

class Userfollowers(models.Model):
    user_1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='parent_user')
    user_2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='requesting_user')
    # status = models.BooleanField(default=False)
    

    def __str__(self):
        return "{}".format('connection list')
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields= ['user_1', 'user_2'], name='unique_user_connection' )
        
        ]



class UserInbox(models.Model):
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipient')
    message_text = models.TextField()
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender')
    msg_datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}".format('user messages')

    class Meta:
        constraints = [
            models.UniqueConstraint(fields= ['recipient', 'sender'], name='unique_user_messages' )
        
        ]



class Group(models.Model):
    """
    Database Model for platform groups
    The commented created_by field is to allow user to create a group and own the group.. Thought it wasn't neccessary
    ### they are not allowed to create their own groups
    """
    group_name = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True)
    date_created = models.DateField(auto_now_add=True)
    members = models.ManyToManyField(User, through='GroupMember')


    def __str__(self):
        return self.group_name


class GroupMember(models.Model):
    """
        A Database model for cobtaing members of a group
    """
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format('Group members')
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields= ['group', 'user'], name='unique_group' )
        
        ]



class Post(models.Model):
    """
    Database model for user posts in a group.
    media: for images... can be blank for text_posts
    """
    post_text = models.TextField()
    media = models.ImageField(upload_to='MediaPosts', blank=True)
    metatags = models.ForeignKey('MetaTag', on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, null=True, blank=True, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.username
    # class Meta:
    # abstract = True


class PostComment(models.Model):
    """
        A Database model for all comments to a post
        actor: The performer of the comment event
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_commented = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class CommentReply(models.Model):
    """
       Table for Replying comments
    """
    comment = models.ForeignKey(PostComment, on_delete=models.CASCADE)
    reply = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_commented = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

    # class Meta:
    # abstract = True


class MetaTag(models.Model):
    """
        A Database model for meta tags
    """
    tag = models.CharField(max_length=200)

    def __str__(self):
        return self.tag





class Likes(models.Model):

    """
        Table for likes for both post and comments
    """
    parent_type = models.IntegerField() ## id of post or comment
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.user.username

    # class Meta:
    # abstract = True


"""
    This section is suppose to be for activity table to track user activity, but for now leave
    it
"""
class Events(models.Model):
    event_type = models.CharField(max_length=200)


class Activity(models.Model):
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    target_object = models.IntegerField()
    user = models.ForeignKey(Userfollowers, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format('News Feed')






        

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

#ER DIAGRAM IMPLEMENTATION OF THE LOCATION ATTRIBUTE IN THE USERPROFILE MODEL    
class UserLocation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField()
    location_details = models.TextField()
    def __str__(self):
        return self.user.username
"""



























