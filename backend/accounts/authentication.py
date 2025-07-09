# authentication.py
from rest_framework_simplejwt.authentication import JWTAuthentication

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('access_token')
        print("🔍 Access token in cookie:", token)  # ✅ Debug print
        if token is None:
            return None
        try:
            validated_token = self.get_validated_token(token)
            return self.get_user(validated_token), validated_token
        except Exception as e:
            print("❌ Invalid token:", e)
            return None

