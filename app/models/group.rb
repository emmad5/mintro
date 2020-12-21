class Group < ApplicationRecord
  attr_reader :password
  has_many :users
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :password_digest, presence: true

  def password=(password) 
      @password = password
      self.password_digest =  BCrypt::Password.create(password)
  end

  def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
