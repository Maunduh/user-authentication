class UserSerializer
    include JSON::Serializer
    attributes :id, :email, :password
  end