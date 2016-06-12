class AddAnswerDefaultValueToComments < ActiveRecord::Migration[5.0]
  def change
    change_column_default :comments, :answer, false
  end
end
