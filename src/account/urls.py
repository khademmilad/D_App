from django.urls import path
from .views import (
	account_view,
	edit_account_view,
	crop_image,
    RegistrationAPIView,
    LoginAPIView,
)

app_name = 'account'

urlpatterns = [
    # API Urls
	path('api/register/', RegistrationAPIView.as_view(), name='register'),
    path('api/login/', LoginAPIView.as_view(), name='login'),

	path('<user_id>/', account_view, name="view"),
	path('<user_id>/edit/', edit_account_view, name="edit"),
	path('<user_id>/edit/cropImage/', crop_image, name="crop_image"),

	
]