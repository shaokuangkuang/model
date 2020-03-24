var data = [
    ['Java','1','降','-0.01%'],
    ['C','2','升','+2.44%'],
    ['Python','3','升','+1.41%'],
    ['C++','4','降','-2.58%'],
    ['C#','5','升','-2.07%'],
    ['Visual Basic.NET','6','降','-1.17%'],
    ['JavaScript','7','降','-0.85%']
  ];
  
  var container = document.getElementById('first');
  var hot = new Handsontable(container, {
    data: data,
    contextMenu: true,          // 启用快捷菜单
    manualRowResize : true,     // 调整行大小  
    manualColumnResize : true,  // 调整列大小 
    rowHeaders: false,//首列前边是否需要
    colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
      ]
  });
      var myChart = echarts.init(document.getElementById('sencend'));
      var option = {
          title: {
              text: 'JavaScript语言排名变化'
          },
          tooltip: {},
          xAxis: {
              data: [2000, 2005, 2010, 2015, 2020]
          },
          yAxis: {
              type:'value'
          },
          series: [{
              name: '排名',
              data: [6,9,8,8,7],
              type: 'line'
          }]
      };
      myChart.setOption(option);