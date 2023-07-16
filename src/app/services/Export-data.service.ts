import jsPDF from "jspdf";
import { Styles, UserOptions } from "jspdf-autotable";
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
interface jsPDFCustom extends jsPDF {
  autoTable: (options: UserOptions) => void;
}
export class ExportData{
  printPdf(table:any,cols:string[],fileName :string) {
    const tableData = table;
    const columns = cols;
    const rows = tableData.map(Object.values);

    const doc = new jsPDF() as jsPDFCustom;

    doc.addFont('assets/font/Cairo-VariableFont_wght.ttf', 'Arabic', 'normal');
    doc.setFont('Arabic');
    const styles = { font: 'Arabic',halign:'right' } as Partial<Styles>;
    doc.autoTable({
      head: [columns],
      body: rows,
      styles
    });
    doc.save(fileName);
  }
  toExcel(tableData :any,fileName:string){
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(tableData);
    const columnWidths = this.calculateColumnWidths(tableData);
    worksheet['!cols'] = columnWidths;
    const workbook: XLSX.WorkBook = { Sheets: { 'Data': worksheet }, SheetNames: ['Data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, fileName);
  }
  calculateColumnWidths(data: any[]): XLSX.ColInfo[] {
    const columnWidths: XLSX.ColInfo[] = [];

    const columns = Object.keys(data[0]);
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const columnWidth: XLSX.ColInfo = { width: 0, wch: 0, MDW: 0 };
      let maxLength = column.length;
      for (let j = 0; j < data.length; j++) {
        const cellValue = data[j][column];
        const cellLength = cellValue ? cellValue.toString().length : 0;
        if (cellLength > maxLength) {
          maxLength = cellLength;
        }
      }

      columnWidth.width = maxLength * 1.2;
      columnWidth.wch = maxLength;
      columnWidth.MDW = 1;

      columnWidths.push(columnWidth);
    }

    return columnWidths;
  }

}

