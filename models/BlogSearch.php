<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Blog;

/**
 * BlogSearch represents the model behind the search form of `app\models\Blog`.
 */
class BlogSearch extends Blog
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['s_name', 's_caption', 's_description', 's_img_sm', 's_img_bg', 'created_at', 'updated_at', 'write_by', 'section'], 'safe'],
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
        $query = Blog::find();

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
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 's_name', $this->s_name])
            ->andFilterWhere(['like', 's_caption', $this->s_caption])
            ->andFilterWhere(['like', 's_description', $this->s_description])
            ->andFilterWhere(['like', 's_img_sm', $this->s_img_sm])
            ->andFilterWhere(['like', 's_img_bg', $this->s_img_bg])
            ->andFilterWhere(['like', 'write_by', $this->write_by])
            ->andFilterWhere(['like', 'section', $this->section]);

        return $dataProvider;
    }
}
