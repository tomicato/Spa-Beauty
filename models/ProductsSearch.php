<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Products;

/**
 * ProductsSearch represents the model behind the search form of `app\models\Products`.
 */
class ProductsSearch extends Products
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['prod_id', 'categories_id', 'price'], 'integer'],
            [['img', 'prod_name', 'prod_caption', 'full_description', 'new', 'sale', 'hit', 'in_stock'], 'safe'],
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
        $query = Products::find();

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
            'prod_id' => $this->prod_id,
            'categories_id' => $this->categories_id,
            'price' => $this->price,
        ]);

        $query->andFilterWhere(['like', 'img', $this->img])
            ->andFilterWhere(['like', 'prod_name', $this->prod_name])
            ->andFilterWhere(['like', 'prod_caption', $this->prod_caption])
            ->andFilterWhere(['like', 'full_description', $this->full_description])
            ->andFilterWhere(['like', 'new', $this->new])
            ->andFilterWhere(['like', 'sale', $this->sale])
            ->andFilterWhere(['like', 'hit', $this->hit])
            ->andFilterWhere(['like', 'in_stock', $this->in_stock]);

        return $dataProvider;
    }
}
