from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'Signup', views.SignUp, basename='signup')
router.register(r'Login', views.Login, basename='login')
router.register(r'Userprofile', views.UserProfileView, basename='profile')
router.register(r'Posts', views.Post, basename='posts')
router.register(r'comments', views.PostComment, basename='comments')
router.register(r'Contacts', views.Contacts, basename='contact')
router.register(r'Groups', views.Groups, basename='group')

urlpatterns = [

    path('', include(router.urls)),
]

# urlpatterns = [
#     path('signup/', views.SignUp.as_view(), name="signup"),
#     path('login/', views.Login.as_view(), name='login'),
#     path('userprofile/', views.UserProfileView.as_view(), name="user_profile"),
#     path('post', views.Post.as_view(), name="posts"),
#     path('post/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
#     path('postcomment', views.PostComment.as_view(), name="post_comment"),
#     path('contacts/', views.Contacts.as_view(), name="user_contacts"),
#     path('groups/', views.Groups.as_view(), name="groups"),
#     # path('group_post/<int:pk>', views.GroupPost.as_view(), name="group_post"),
# ]


