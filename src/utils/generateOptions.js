export default function generateOptions (label, unit, subtitle) {
  return {
    plugins: {
      title: {
        display: true,
        text: label,
        font: {
          family: 'Nunito',
          size: 18,
          weight: '500'
        }
      },
      subtitle: {
        display: subtitle,
        text: subtitle,
        font: {
          family: 'Nunito'
        }
      },
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'dimgray',
        titleFont: {
          family: 'Nunito'
        },
        bodyColor: 'black',
        bodyFont: {
          family: 'Nunito'
        },
        callbacks: {
          beforeBody: function (tooltipItem) {
            const value = tooltipItem[0].formattedValue
            tooltipItem[0].formattedValue = ` ${value}${unit}`
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Nunito'
          },
          maxRotation: 0
        }
      },
      y: {
        grid: {
          color: 'transparent'
        },
        ticks: {
          maxTicksLimit: 7,
          font: {
            family: 'Nunito'
          },
          maxRotation: 0
        }
      }
    }
  }
}
