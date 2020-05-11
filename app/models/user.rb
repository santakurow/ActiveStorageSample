class User < ApplicationRecord
  has_many_attached :avatars

  validates :name, presence: true, length: {maximum: 16}
end
