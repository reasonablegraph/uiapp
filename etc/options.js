var options = {

	"dir": {
		"assets" : "/data/www/assets",
		"themes" : "/data/www/sites/default/themes/",
		"modules" : "/data/www/sites/default/modules/",
	},
	'laravel_storage_settings_file':'/opt/ins/dev/laravel/app/store/meta/setting.json',
	'HOST_LARAVEL':'laravel.local',
	//'commands_set':'amelib',
//	'commands_set':'demo-altsol',
	'commands_sets': {
		'amelib':['concat:commands-amelib', 'concat:form-amelib', 'concat:config-storage-php-amelib'],
		'demo_en':['concat:commands-demo_en', 'concat:form-demo_en', 'concat:config-storage-php-demo_en'],
		'bibframe':['concat:commands-bibframe', 'concat:form-bibframe', 'concat:config-storage-php-bibframe'],
		'ghr':['concat:commands-ghr', 'concat:form-ghr', 'concat:config-storage-php-ghr'],
		'oralhistory':['concat:commands-oralhistory', 'concat:form-oralhistory', 'concat:config-storage-php-oralhistory'],
		'music':['concat:commands-music', 'concat:form-music', 'concat:config-storage-php-music'],
		'scorp':['concat:commands-scorp', 'concat:form-scorp', 'concat:config-storage-php-scorp'],
		'dryl':['concat:commands-dryl', 'concat:form-dryl', 'concat:config-storage-php-dryl'],
	},

}

