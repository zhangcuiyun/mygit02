var gulp=require("gulp");

var uglify = require("gulp-uglify"); //导入js压缩插件
var babel = require("gulp-babel"); //es6转es5
gulp.task("jsTask",function(){
	gulp.src("src/js/*.js")
		.pipe(babel({"presets": ["es2015"]}) )
		.pipe(uglify())
		.pipe(gulp.dest("dest/js"))
}) 
gulp.task("default",["jsTask"])
