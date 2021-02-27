import {Sequelize} from 'sequelize';
const {Model, DataTypes} = Sequelize;

export default (sequelize) => {
    class CounselingQuestion extends Model {
      static associate(models) {
        this.belongsTo(models.User, { foreignKey: "userId", targetKey: "id" })
        this.belongsTo(models.Category, { foreignKey: "categoryId ", targetKey: "id" })
        this.belongsTo(models.Emotion, { foreignKey: "emotionId ", targetKey: "id" })
        this.hasMany(models.CounselingComment, { foreignKey: "counselingQuestionId ", sourceKey: "id" })
      }
    }

    CounselingQuestion.init({
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'counseling_questions',
        charset: 'utf8',
        timestamps: true,
        underscored: true,
      },
      );

  return CounselingQuestion;
}
