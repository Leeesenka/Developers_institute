from django.urls import path
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from django.conf.urls.static import static
from django.conf import settings
from image_share.views import (ProfileView,
                    SignUpView,
                    update_profile,
                    profile_redirect_view,
                    index,
                    view_image,
                    upload_image,
                    view_images,
                    my_images,
                    )

app_name = 'image_share'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('logout/', LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('profile-redirect/', profile_redirect_view, name='profile-redirect'),
    path('update-profile/', update_profile, name= 'update-profile'),
    path('', index, name='index'),
    path('upload_image/', upload_image, name='upload_image'),
    path('image/<int:image_id>/', view_image, name='view_image'),
    path('images/', view_images, name='view_images'),
    path('my_images/', my_images, name='my_images'),
    # path('create_album/', create_album, name='create_album'),
    # path('albums/', view_albums, name='view_albums'),
    # path('feed/', feed, name='feed'),

]+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)