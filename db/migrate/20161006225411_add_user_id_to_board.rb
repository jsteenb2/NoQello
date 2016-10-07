class AddUserIdToBoard < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :user_id, :integer
  end
end
