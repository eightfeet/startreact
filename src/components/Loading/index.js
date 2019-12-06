import Loading from '@eightfeet/loading';

export default new Loading({
	style: { // 定义样式 {overlay: 覆盖层, content: 内容区, vertices: 组成节点}
		content: {
			backgroundColor: 'rgba(0,0,0,0)'
		},
		vertices: {
			height: '0.6em',
			width: '2px',
			size: '30%'
		}
	}
});