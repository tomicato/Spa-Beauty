<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\OrdersItems;

/**
 * OrdersItemsSearch represents the model behind the search form of `app\models\OrdersItems`.
 */
class OrdersItemsSearch extends OrdersItems
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'orders_cart_id', 'products_id', 'qty_items'], 'integer'],
            [['name'], 'safe'],
            [['price', 'sum_items'], 'number'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = OrdersItems::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'orders_cart_id' => $this->orders_cart_id,
            'products_id' => $this->products_id,
            'price' => $this->price,
            'qty_items' => $this->qty_items,
            'sum_items' => $this->sum_items,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name]);

        return $dataProvider;
    }
}
