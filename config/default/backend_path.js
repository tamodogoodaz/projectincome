module.exports = {
    title: "Project Income2 ",
    files: {
        routes: [
            'modules/core/server/routes/core',
            'modules/setting/server/routes/setting',
            'modules/users/server/routes/users'
            
        ],
        policies : [
            './modules/core/server/policies/core_polict'
        ],
        models: ['./modules/core/server/models/coremodel', './modules/setting/server/models/type','./modules/users/server/models/users_model']
    },

}