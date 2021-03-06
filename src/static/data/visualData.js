const visualData1 = [
    {
        name: '运行数据管理',
        description: '系统自动记录各监测点上传的运行数据'
    },
    {
        name: '检测数据管理',
        description: '系统自动记录各监测点上传的污水运行检测数据'
    },
    {
        name: '数据统计分析',
        description: '系统支持单指标，多指标，单时段，多时段的数据统计分析，生成响应的图表，反应水质数据及趋势'
    },
    {
        name: '历史数据存档',
        description: '系统自动对历史数据进行存档，并按照设定时间进行数据备份以免出现因计算机硬件故障或人为错误操作造成历史数据丢失问题'
    },
    {
        name: '原始数据导出',
        description: '可将采集到的污水处理厂工艺参数，检测数据，能耗，药耗等原始数据打包导出，以便专业分析系统建模分析'
    }
];

const visualData2 = [
    {
        name: '工艺画面开发',
        description: '按照污水运行监管管理要求，将污水处理厂主要工艺流程进行可视化展示，并显示其各监测数据、设备运行情况'
    },
    {
        name: '指标阀值管理',
        description: '在系统后台可以为每个污水处理厂设置监测指标与指标阈值。指标阈值设置支持单个设置与批量设置'
    },
    {
        name: '指标超限报警',
        description: '当监测指标大于预设的上限时，向该设施的负责人发送报警信息，当监测指标大于上上限时，还要将报警信息抄送给管理部门'
    },
    {
        name: '远程在线控制',
        description: '当出现指标超限报警，相关工作人员可通过监测子系统控制相关设备的启停，类似产水泵、提升泵、鼓风机'
    },
    {
        name: '历史报警记录',
        description: '系统自动记录每次报警信息，并支持按照时间、设施、指标进行报警信息查询。相关信息可以自动同步到监管办公子系统'
    },
    {
        name: '微信报警提醒',
        description: '通过关注微信集团污水运行监管专用公众号，当监测指标超限时，系统通过微信公众号向该设施的负责人发送报警信息，并抄送相关管理部门工作人员'
    },
    {
        name: '监管报表生成',
        description: '系统按照相应的格式和设置，定期生成多种监管报表，并自动保存，支持自动以邮件的形式推送给相关人员。生成的报表包括：按照事件生成监管报表，按照污水处理厂生成监管报表，按照事故生成监管报表等'
    }
];

const visualData3 = [
    {
        name: '污水设施展示',
        description: '在电子地图上按照不同的图层和符号，叠加显示污水处理设备、污水管网、出水口、的位置，直观反映污水处理设备的分布情况和系统层次结构'
    },
    {
        name: '污水设施查询',
        description: '可以在地图上直接点击相应设备的图标，在弹出的信息窗口中查看该设备的基本信息。基本信息包括：污水设备介绍、图片、详细监控信息等'
    },
    {
        name: '运行状态管理',
        description: '在污水设用不同的颜色和标注信息代表其工程状态（运行、在建、待建）、运行监控状态（正常、异常）、综合运行评价（优、良、差），从而宏观反映污水处理设施的总体情况'
    },
    {
        name: '运行指标管理',
        description: '在污水设施图标上显示各污水处理设施的主要运行参数，比如：进出水口的流量、水质。点击某一个污水处理单元还可以进入其主要工艺流程画面，从而更加直观的了解该污水处理单元的运行情况'
    },
    {
        name: '监控视频集成',
        description: '可集成各污水处理设施运行监管视频画面，支持在地图上直接点击摄像头图标，显示该摄像头的实时监控画面'
    }
];

const visualData4 = [
    {
        name: '重点设施管理',
        description: '对所管理重点设施信息，包括设施基本信息、联系人、责任人等信息的管理，可以在地图上标注其空间位置'
    },
    {
        name: '监督检查管理',
        description: '主要是操作人员日常检查等检查事项信息的记录。结合移动端，现场记录监督检查情况，支持坐标定位、现场拍照、信息记录等，且可以与服务器自动同步；支持按月、季、年进行工作统计。管理人员可以通过本系统在线回复处理情况'
    },
    {
        name: '数据统计分析',
        description: '系统支持单指标，多指标，单时段，多时段的数据统计分析，生成响应的图表，反应水质数据及趋势'
    },
    {
        name: '监督检查APP',
        description: '支持操作人员现场记录监督检查情况，支持坐标定位、现场拍照、信息记录等，可以在移动端直接上报监督检查情况和设施信息查询'
    },
    {
        name: '设施维护管理',
        description: '污水处理设备维护情况进行动态管理，在建工程的添加、维护管理，工作人员对在建工程的月度上报；已建工程的维护管理，设备运行月报的上报等，支持打印、导出等基本功能'
    },
    {
        name: '管理信息上报',
        description: '建立沟通平台，淘汰纸质上报方式，加快信息流转速度，提高办事效率。主要包括接收消息通知、处理检查问题、反馈工作情况、上报运营报表、上报演练情况、上报检查处理结果、查询自身诚信情况等'
    }
];

const visualData5 = [
    {
        name: '设备管理考核',
        description: '无纸化操作，信息化平台统一管理，重点考核设备管理台账、设备完好率，主要包括：参与工艺运行的机械设备、电器设备、控制设备、监测仪表；水质化验设备、维修设备、交通运输设备等'
    },
    {
        name: '水质管理考核',
        description: '无纸化操作，信息化平台统一管理，主要考核化学需氧量（COD）、氨氮指标，出水水质合格率、月平均合格率、年合格率、单项合格率等'
    },
    {
        name: '厂区管理考核',
        description: '无纸化操作，信息化平台统一管理，通过建立厂区管理考核指标体系，进行污水厂（站）管理方面的考核，包括：厂区环境、安全管理、档案管理等'
    },
    {
        name: '综合评估分析',
        description: '无纸化操作，信息化平台统一管理，针对设备管理考核结果、水质管理情况考核结果、厂区管理考核结果，按照相应的分析算法综合评价污水处理厂（站）运行情况'
    },
    {
        name: '数据统计分析',
        description: '长期超标率、数据稳定性分析、数据区间分析、业务经验分析、数据预测分析等'
    },
    {
        name: '数据预测分析',
        description: '基于历史数据对未来一天、3天的数据进行预测，如果现场实际数据与预测数据发生重大偏离，可以作为重点观察对象'
    }
];

const visualData6 = [
    {
        name: '基础数据管理',
        description: '用于计算的各项基础数据管理与数据填报'
    },
    {
        name: '成本指标计算',
        description: '计算每年外购药剂费用、每年耗电费、污泥处置费、每年工资福利费、大修理费、日常维护费、折旧费、财务费用、摊销费'
    },
    {
        name: '总成本费用计算',
        description: '计算污水厂在计算总成本中扣除折旧费，摊销费支出后的成本费用'
    },
    {
        name: '经营成本费用计算',
        description: '一年内为生产和销售而花费的全部费用'
    },
    {
        name: '单位污水处理成本计算',
        description: '分析计算单位污水处理总成本、单位污水处理运营成本、单位污水处理电耗三项指标'
    },
    {
        name: '成本分析预测',
        description: '可自定义日污水处理量，从而灵活计算各项成本指标，分析投资回报率。分析结果以AI可视化报表的方式呈现'
    }
];

export {
    visualData1,
    visualData2,
    visualData3,
    visualData4,
    visualData5,
    visualData6,
};