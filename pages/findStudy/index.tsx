import FixedLayout from "@/components/common/layout/FixedLayout";
import MainContantsLayout from "@/components/common/layout/MainContantsLayout";


export default function FindStudy() {
  return (
    <FixedLayout fontWeight={3}>
      <MainContantsLayout
            pageName="findStudy"
            title="스터디 모집"
      />
    </FixedLayout>
  );

}