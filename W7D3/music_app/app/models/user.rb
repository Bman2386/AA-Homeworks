class User < ApplicationRecord
    validates :email, :session_token, uniqueness:  true
    validates :email, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence: { message: "Password can't be blank" }

    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end
end