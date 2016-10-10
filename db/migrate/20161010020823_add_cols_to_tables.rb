class AddColsToTables < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :description, :string
    add_column :cards, :title, :string
    add_column :cards, :completed, :boolean, default: false
    add_column :cards, :due_date, :date
  end
end
