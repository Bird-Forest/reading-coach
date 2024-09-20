import React from "react";
import styles from "@/components/train/Train.module.css";
import NavigateTrain from "@/components/info/NavigateTrain";
import ButtonMore from "@/components/button/ButtonMore";
import MyGoalRead from "@/components/goal/MyGoalRead";
import TrainListBooks from "@/components/train/TrainListBooks";
import MyChart from "@/components/chart/MyChart";
import ButtonLink from "@/components/button/ButtonLink";

export default function TargetPage() {
  return (
    <div className={styles.wrapTrainMob}>
      <NavigateTrain />
      <div className={styles.boxTrain}>
        <MyGoalRead />
        <TrainListBooks />
        <div className={styles.wrapBtnLink}>
          <ButtonLink path="/statistic">Почати тренування</ButtonLink>
        </div>
        <MyChart />
        <ButtonMore />
      </div>
    </div>
  );
}
