'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'),
    babel = require("gulp-babel"),
    es2015 = require("babel-preset-es2015"),
    breact = require("babel-preset-react"),
    bp = require("babel-preset-stage-0");

const rollup = require('rollup');
const json = require('rollup-plugin-json');
const babel_rollup = require('rollup-plugin-babel');

const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

gulp.task('babel', function() {
    return gulp.src("./src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./lib"));
});

gulp.task('sass', function() {
    return gulp.src('./assets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('rollup', async function() {
    const bundle = await rollup.rollup({
        entry: './src/index.js',
        external: [
            'jquery',
            'react',
            'react-dom'
        ],
        plugins: [
            resolve(),
            commonjs(),
            json(), babel_rollup({
                "presets": [
                    [
                        "es2015",
                        {
                            "modules": false
                        }
                    ], "react", "stage-0"
                ],
                "babelrc": false,
                "plugins": [
					"lodash",
                    "external-helpers",
                    "transform-es3-property-literals",
                    "transform-es3-member-expression-literals",
                    "transform-decorators-legacy"
                ]
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    });

    await bundle.write({
        format: 'umd',
        moduleName: 'rnexui',
        globals: {
            'jquery': 'jQuery',
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
        //intro: 'var React = 12;',
        dest: './dist/rnexui.js',
        //sourceMap: true
    });
});

gulp.task("default", ["rollup", "sass", 'babel'], function() {
    gulp.src("./examples/**/*.jsx")
        .pipe(babel({
            presets: [es2015, bp, breact, "stage-0"],
            "plugins": [
                "transform-decorators-legacy",
                "transform-es2015-modules-amd"
            ]
        }))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest('./examples'));

    //gulp.run('sass');

});

gulp.watch("./examples/**/*.jsx", function() {
    console.log('files change...')
    gulp.run('default');
});

gulp.watch('./assets/**/*.scss', function() {
    console.log('sass change...')
    gulp.run('sass');
});

gulp.watch('./src/**/*.js', function() {
    console.log('js change...')
    gulp.run('babel');
    gulp.run('rollup');
});