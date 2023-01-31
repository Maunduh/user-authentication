class UserSerializer
    include JSON::Serializer
    attributes  :email, :password
  end