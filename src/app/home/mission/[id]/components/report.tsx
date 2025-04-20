import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { jsPDF } from "jspdf";

interface ReportData {
  mission?: {
    name: string;
    status: string;
    type: string;
    progress: number;
  };
  drone?: Array<{
    id: string;
    model: string;
    battery: number;
    status: string;
  }>;
}

interface ReportProps {
  reportData: ReportData;
  setShowReport: (value: boolean) => void;
  showReport: boolean;
}

function Report({ reportData, setShowReport, showReport }: ReportProps) {

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");

    doc.text("Mission Report", 14, 20);

    if (!reportData?.mission || !reportData?.drone) {
      doc.text("No report data available.", 14, 30);
    } else {
      let yOffset = 30;
      doc.text(`Mission Name: ${reportData.mission?.name}`, 14, yOffset += 10);
      doc.text(`Status: ${reportData.mission?.status}`, 14, yOffset += 10);
      doc.text(`Type: ${reportData.mission?.type}`, 14, yOffset += 10);
      doc.text(`Progress: ${reportData.mission?.progress}%`, 14, yOffset += 10);
      doc.text("-------------", 14, yOffset += 10);
      doc.text(`Drone ID: ${reportData.drone[0]?.id}`, 14, yOffset += 10);
      doc.text(`Drone Model: ${reportData.drone[0]?.model}`, 14, yOffset += 10);
      doc.text(`Battery Level: ${reportData.drone[0]?.battery}%`, 14, yOffset += 10);
      doc.text(`Status: ${reportData.drone[0]?.status}`, 14, yOffset += 10);
    }

    // Save the document as a PDF
    doc.save("mission_report.pdf");
  };

  return (
    <>
      <Dialog open={showReport} onOpenChange={setShowReport}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mission Report</DialogTitle>
          </DialogHeader>
          {!reportData?.mission || !reportData?.drone ? (
            <p className="text-gray-500">No report data available.</p>
          ) : (
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Mission Name:</strong> {reportData.mission?.name}</p>
              <p><strong>Status:</strong> {reportData.mission?.status}</p>
              <p><strong>Type:</strong> {reportData.mission?.type}</p>
              <p><strong>Progress:</strong> {reportData.mission?.progress}%</p>
              <hr />
              <p><strong>Drone ID:</strong> {reportData.drone[0]?.id}</p>
              <p><strong>Drone Model:</strong> {reportData.drone[0]?.model}</p>
              <p><strong>Battery Level:</strong> {reportData.drone[0]?.battery}%</p>
              <p><strong>Status:</strong> {reportData.drone[0]?.status}</p>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setShowReport(false)}>Close</Button>
            <Button onClick={downloadPDF}>Download PDF</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Report;
