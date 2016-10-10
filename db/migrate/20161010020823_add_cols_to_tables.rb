class AddColsToTables < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :description, :string
    add_column :cards, :title, :string
    add_column :cards, :complted, :boolean, default: false
  end
end
