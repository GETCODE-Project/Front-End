import FixedLayout from "@/components/common/layout/FixedLayout";
import FindStudyPage from "@/components/findStudy/FindStudyPage";

export default function FindStudy() {
  return (
    <div>
      <FixedLayout menuClicked={3}>
        <FindStudyPage />
      </FixedLayout>
    </div>
  );
}
