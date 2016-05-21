class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :author, default: 'Anonymous', null: false
      t.text :body, null: false
      t.string :ip
      t.references :product, foreign_key: true
      t.integer :stars, limit: 5

      t.boolean :answer, defaut: false, null: false
      t.boolean :approved, default: false, null: false
      t.integer :rank, default: 0, null: false

      t.timestamps
    end
  end
end
