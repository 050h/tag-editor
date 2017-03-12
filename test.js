$(function(){
	$('#demo2').tagEditor({
		autocomplete: {
			delay: 0,
			position: { collision: 'flip' },
			source: ['人事開発', '人事', '編集・ライティング', 'デザイン', '法務','マーケティング']
		},
		delimiter: ', ',
		forceLowercase: false,
		placeholder: 'タグを入力'
	});
});