class User < ApplicationRecord
    attr_reader :password
    serialize :preferences
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 6 }, allow_nil: true
    before_validation :ensure_session_token
    belongs_to :group, optional: true

    def password=(password) 
        @password = password
        self.password_digest =  BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        end
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
