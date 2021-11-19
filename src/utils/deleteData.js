export default function deleteData (deleteDate, target) {
  if (confirm(`Вы действительно хотите удалить измерения за ${deleteDate}?`)) {
    delete target[deleteDate]
    // todo confirm deleting changes
    // insertResultInputsDates()
    // updateResultsInfo()
    //
    // updateProportionsCharts()
    //
    // getProportionsColors()
  }
  return { ...target }
}
