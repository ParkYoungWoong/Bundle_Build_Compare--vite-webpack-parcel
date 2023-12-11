const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    // 기본값,
    // path: path.resolve(__dirname, 'dist'), // 현재 파일의 절대 경로를 기준, dist 폴더에 결과 생성
    // filename: '[name].js', // [name]을 통해 진입점의 파일 이름이 그대로 적용
    clean: true // 결과 생성 전, 기존 결과물 삭제
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요!
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        use: 'swc-loader'
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/i, // i 옵션 - 대소문자 구분 없음
        type: 'asset/resource' // type을 통해 Webpack에 내장된 로더(Builtin Loader) 명시
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }]
    })
  ]
}