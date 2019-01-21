var gulp=require("gulp");
var sass = require("gulp-sass");
gulp.task("copyHtml",function(){
	gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\environmentTechnology"));
});
// gulp.task("copyCss",function(){
// 	gulp.src("css/**/*")
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\environmentTechnology\\css"));
// });
gulp.task("copyImgs",function(){
	gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\environmentTechnology\\img"));
});
gulp.task("copyJs",function(){
	gulp.src("js/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\environmentTechnology\\js"));
	
});
gulp.task("copyphp",function(){
	gulp.src("php/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\environmentTechnology\\php"));
	
});
gulp.task("copyFont",function(){
	gulp.src("font/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\environmentTechnology\\font"));
});
gulp.task("copySass",function(){
	gulp.src("sass/**/*")
	.pipe(sass())
	  .pipe(gulp.dest("D:\\phpStudy\\WWW\\environmentTechnology\\css"));
});
gulp.task("Sass", function () {
	gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("F:\\三阶段项目\\environmentTechnology\\css"));
});
gulp.task("build",["copyHtml","copyImgs","copyJs","copyFont","copyphp","Sass","copySass"],function(){
	console.log("ok");
});
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyHtml"]);
	//gulp.watch("css/**/*",["copyCss"]);
	gulp.watch("img/**/*",["copyImgs"]);
	gulp.watch("js/**/*",["copyJs"]);
	gulp.watch("font/**/*",["copyFont"]);
	gulp.watch("sass/**/*",["copySass"]);
	gulp.watch("php/**/*",["copyphp"]);
	gulp.watch("sass/**/*", ["Sass"]);
});
