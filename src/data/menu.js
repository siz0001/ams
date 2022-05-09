const menus = [
  {
    title: '관리',
    href: '/management',
    icon: 'mdi-application-cog',
    children: [
      {
        title: 'USER 관리',
        key: 'user',
        children: [
          {
            title: '기관 사용자',
            href: '/institutional'
          },
          {
            title: '일반 사용자',
            href: '/user'
          },
          {
            title: '사용권한'
          }
        ]
      },
      {
        title: '마스터 관리',
        key: 'master',
        children: [
          {
            title: 'Local 서버'
          },
          {
            title: '마스터 센서 관리'
          },
          {
            title: '마스터공기살균정화기 관리'
          },
          {
            title: '기관 마스터 센서 관리',
            href: '/agencysensor'
          }
        ]
      },
      {
        title: '설정관리',
        key: 'setting',
        children: [
          {
            title: '측정기 관리'
          },
          {
            title: '측정기 센서 관리'
          },
          {
            title: '그룹 관리',
            href: '/group'
          },
          {
            title: '공기살균정화기 관리',
            href: '/sterilizer'
          }
        ]
      },
      {
        title: '장애',
        key: 'error',
        children: [
          {
            title: '실시간 장애 현황'
          },
          {
            title: '장애 관리'
          },
          {
            title: '로그인 이력 현황'
          }
        ]
      }
    ]
  },
  {
    title: '모니터링',
    href: '/monitoring',
    icon: 'mdi-monitor-eye',
    children: [
      {
        title: '기관 전체 센서별 현황'
      },
      {
        title: '그룹 전체 그룹별 현황'
      },
      {
        title: '그룹 소속 측정기별 현황'
      },
      {
        title: '측정기 개별 센서 현황'
      }
    ]
  },
  {
    title: '현황',
    href: '/current',
    icon: 'mdi-chart-bar',
    children: [
      {
        title: '현황',
        children: [
          {
            title: '미등록 현황'
          },
          {
            title: '측정기 현황'
          },
          {
            title: '센서 평균 현황'
          },
          {
            title: '센서 기간별 현황'
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
