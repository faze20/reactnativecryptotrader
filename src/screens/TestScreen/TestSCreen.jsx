import React from 'react';
import {Dimensions,Text, View} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
// import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';

// export const {width: SIZE} = Dimensions.get('window');

// export const data = [
//   {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
//   {x: 1453248000, y: 1.53}, {x: 1453334400, y: 1.54},
//   {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
//   {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
//   {x: 1453766400, y: 2.30}, {x: 1453852800, y: 2.42},
//   {x: 1453939200, y: 2.55}, {x: 1454025600, y: 2.41},
//   {x: 1454112000, y: 2.43}, {x: 1454198400, y: 2.20},
// ];
// const points = monotoneCubicInterpolation({data, range: 40});
// const BasicExample = () => (
//   <View style={{ backgroundColor: 'black' }}>
//     <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
//       <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
//       <ChartDot style={{ backgroundColor: 'blue' }} />
//     </ChartPathProvider>
//   </View>
// );
// export default BasicExample ;

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const price = [
    [
        1638399794129,
        57124.866357580555
      ],
      [
        1638403476369,
        57169.37199381056
      ],
      [
        1638407244512,
        56916.55089897206
      ],
      [
        1638410441521,
        57214.082150451875
      ],
]
const stringNumbers = price.map((item) => item[2])
console.log(price.map((item) => item[1]) , typeof(stringNumbers), stringNumbers);
const data = {
    // labels: [price.map((item) => item[2])].map(String),
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
        data: [20, 45, 28, 80, 99, 43],
        // data: [price.map((item) => item[1])],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
        }
],
    legend: ["Rainy Days"] // optional
};


// const newData = {
//     labels: [],
//     datasets:[
//         {
//             data:[
//                 [
//                     1638399794129,
//                     57124.866357580555
//                   ],
//                   [
//                     1638403476369,
//                     57169.37199381056
//                   ],
//                   [
//                     1638407244512,
//                     56916.55089897206
//                   ],
//                   [
//                     1638410441521,
//                     57214.082150451875
//                   ],
//             ]
//         }
//     ]
// }

const LineGraphComponent = ()=>{
    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
                />
        </View>

    )
}
export default LineGraphComponent;