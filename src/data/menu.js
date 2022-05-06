const menus = [
  {
    title: '관리',
    href: '/management',
    icon: 'mdi-application-cog',
    children: [
      {
        title: 'USER 관리',
        children: [
          {
            title: '기관 사용자'
          },
          {
            title: '일반 사용자'
          },
          {
            title: '사용권한'
          }
        ]
      },
      {
        title: '설정 관리',
        children: [
          {
            title: 'Local 서버'
          },
          {
            title: '센서'
          },
          {
            title: '측정기 관리'
          },
          {
            title: '공기살균정화기'
          }
        ]
      },
      {
        title: '설정 관리',
        children: [
          {
            title: '측정기'
          },
          {
            title: '센서'
          },
          {
            title: '그룹'
          },
          {
            title: '장애'
          }
        ]
      }
    ]
  },
  {
    title: '모니터링',
    href: '/monitoring',
    icon: 'mdi-monitor-eye'
  },
  {
    title: '현황',
    href: '/current',
    icon: 'mdi-chart-bar',
    children: [
      {
        title: '측정기',
        children: [
          {
            title: '미등록 현황'
          },
          {
            title: '개별 현황'
          },
          {
            title: '기간별 현황'
          }
        ]
      },
      {
        title: '센서',
        children: [
          {
            title: '평균 현황'
          },
          {
            title: '기간별 현황'
          }
        ]
      }
    ]
  },
  {
    title: '도움말',
    href: '/help',
    icon: 'mdi-alert-circle-check-outline'
  }
]

export default menus
