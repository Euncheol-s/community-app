import { useParams } from "react-router-dom";
import Major from "../components/Major";
import NavBar from "../components/NavBar";

function MajorInfo() {
  const num = useParams();
  const college = [
    {
      collegeName: "소프웨어융합학부",
      collegeDescription:
        "산업체 수요에 대응하는 문제해결형 SW 인재 양성을 교육 목표로 4차 산업혁명 기술변화 흐름에 맞는 실전적 SW 교육과정으로 전면 개편하였습니다. 교육과정은 SW전공역량에 필수적인 기초코딩과목과 SW전공과목, 프로젝트기반 산학협동과목을 운영하고, 4차 산업혁명을 선도할 핵심전공인 빅데이터전공, 콘텐츠IT전공, 스마트IoT전공을 특화시켜 운영합니다. 교육과정은 SW전공역량에 필수적인 기초코딩과목과 SW전공과목, 프로젝트기반 산학협동과목을 운영하고, 4차 산업혁명을 선도할 핵심전공인 빅데이터전공, 콘텐츠IT전공, 스마트IoT전공을 특화시켜 운영합니다.",
      collegeImg: "https://penrose.law/wp-content/uploads/Code.jpg",
      major: [
        [
          "빅데이터전공",
          "https://successknocks.com/wp-content/uploads/2021/06/Bigdata2.jpg",
          "빅데이터 전공에서는 빅데이터/클라우드, 인공지능 분야에 대한 특화된 교육과정을 제공함으로써, 급변하는 컴퓨터 기술의 발전에 선도적으로 참여하고 빅데이터 활용 능력을 통해 미래를 만들어 갈 수 있는 인력을 배양하는데 그 목표를 두고 있습니다. 이를 위하여 기술 변화와 시장의 수요에 맞게 교과 과정을 운영하고 있으며, 정보화 시대인 21세기를 선도하는 이론과 기술을 익힌 정보인력을 양성하고 있습니다. 졸업 후 산업체 및 연구소 등에서 수준 높은 소프트웨어 개발자로 사회에 기여할 수 있도록 지원하고 있습니다.",
        ],
        [
          "스마트IoT전공",
          "https://blog.superannotate.com/content/images/2022/06/internet-of-things-in-ai-applications.png",
          "스마트IoT 전공에서는 사물인터넷 (IoT: Internet of Things) 구축과 IoT 기반 서비스 설계 및 구현에 필요한 원리와 다양한 기술을 배웁니다. IoT에서 다양한 정보를 수집하기 위한 센서 기술과 신호 처리 기술, 정보를 전달하기 위한 IoT 통신망, 수집된 데이터를 분석・평가하고 결정을 내리기 위한 데이터 분석 기법 및 인공지능 관련 기술, 그리고 정보보호를 위한 기술 등을 배웁니다. 이러한 교육을 통해 IoT 환경에 필요한 기본적인 공학적 소양을 갖추고 이를 산업에 적용할 수 있는 IoT 전문 인력을 양성합니다.",
        ],
        [
          "콘텐츠IT전공",
          "https://newsimg.hankookilbo.com/cms/articlerelease/2021/10/04/74a05b80-6ec1-448c-a177-367142c4bcf2.png",
          "첨단 IT분야 중 하나인 콘텐츠IT 분야에 특화된 전문 인력 양성을 목표로, 실무 중심의 교육을 통하여 콘텐츠 관련 산업계에서 요구하는 전문적인 소프트웨어 개발 능력을 배양합니다. 최근 콘텐츠IT 분야의 전문 인력 수요를 고려하여, 저희 전공에서는 가상현실/증강현실(VR/AR) 트랙과 게임 개발자 트랙으로 구분하여 진로를 계획적으로 설정하고 학업을 체계적으로 이수할 수 있도록 도움을 주고 있습니다.",
        ],
      ],
    },
    {
      collegeName: "인공지능융합학부",
      collegeDescription:
        "한림대학교는 첨단기술분야의 인재양성을 위해, 2021년 “인공지능융합학부(입학정원 60명)”를 신설하였고, 2022년 입학정원을 90명으로 확대하여 대학 전체의 인공지능 융합(AI+X)을 선도하는 대표적인 학문단위로 육성하고자 합니다. 한림대학교의료원(5개 병원)과 연계한 “AI의료융합전공”을 비롯하여, “AI로봇융합전공”, “AI기술경영융합전공” 개설하여 의료인공지능분야를 특성화하고, 기계, 전산, 전자공학 분야의 다학제적 융합과 첨단기술을 활용한 비즈니스 모델 개발 분야에도 주력합니다. 한림대학교 인공지능융합학부는 공학뿐만 아니라, 인문사회를 포함하는 모든 영역에서 인공지능 융합을 선도하여, 금융 분야의 핀테크(Fin-Tech), 디지털인문예술, 기후 및 지리정보(Climate information and GIS) 등 그 영역이 확장될 것으로 예측되는 첨단 분야 융합을 촉진해 나갈 것입니다. ",
      collegeImg:
        "https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/insights/topic/ai/kv-ai-pc_2.png?$ORIGIN_PNG$",
      major: [
        [
          "AI의료융합전공",
          "http://cdn.koreabiomed.com/news/photo/202112/12873_13303_573.jpg",
          "major decsription",
        ],
        [
          "AI로봇융합전공",
          "https://cdn.aitimes.com/news/photo/202204/144214_149939_1354.jpg",
          "major decsription",
        ],
        [
          "AI기술경영융합전공",
          "https://internetofbusiness.com/wp-content/uploads/2018/08/financial_services-1280x720.jpg",
          "major decsription",
        ],
      ],
    },
    {
      collegeName: "데이터사이언스학부",
      collegeDescription:
        "4차 산업혁명은 인공지능의 시대라고 사람들은 이야기 합니다. 인공지능의 핵심이 바로 데이터입니다. 여러분들이 많이 사용하는 SNS나 구글 등은 플랫폼을 이용해 데이터를 수집하고, 데이터를 활용하는 사업모델을 가지고 있습니다. 결국 미래사회의 핵심이 바로 ‘데이터’입니다. 데이터사이언스학부는 'Hi FIVE' 교육모델과 교수방법을 통하여 4차 산업혁명시대로의 변화 동력인 '빅데이터'를 잘 이해하고 다룰 수 있는 미래사회 선도 역량을 갖춘 인재 육성에 힘쓰고 있습니다. 학생의 신사회진출 기회의 수월성을 높이는 기업수요 맞춤 '데이터 신 산업교육 선도모델' 을 운영하는 측면에서 차별성을 갖습니다. 한림대학교 데이터사이언스학부에서는 데이터에 대한 문해력(Data Literacy)과 데이터분석력(Data Analysis Competency)을 갖춘 데이터 사이언티스트(Data Scientist) 양성을 목표로 하고 있습니다.",
      collegeImg:
        "https://s27389.pcdn.co/wp-content/uploads/2021/07/data-science-predictions-for-near-future-1024x440.jpeg.optimal.jpeg",
      major: [
        [
          "데이터테크",
          "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/database.jpg?fit=1920%2C1080&ssl=1",
          "수 많은 데이터를 비판적으로 해석하고, 결과를 도출하기 위한 의사결정을 하기위해 필요한 시각화 및 분석을 하기 위한 프로그램 언어를 배우고, 데이터구조에 대한 이해를 돕기 위한 기술적 배경 등 이해도를 높인다.",
        ],
        [
          "임상의학통계",
          "https://online.stanford.edu/sites/default/files/styles/embedded_large/public/2020-02/medical-statistics-III-common-statistical-tests-in-medical-research_SOM-XCHE0004.jpg?itok=z-ciUDLs",
          "임상 실험과 각종 생체 데이터를 이해하고, 연구에 필요한 여러 분석 방법에 대한 내용을 배우며, 데이터를 통한 분석 실습을 통해 의료 데이터에 관한 전문적 능력을 갖춘다.",
        ],
        [
          "디지털금융정보",
          "https://www.veristrat.com/wp-content/uploads/2022/02/Digital-Finance.png",
          "금융분야에 해당하는 채권, 보험 등의 기초지식 함양과 통계적 방법을 통해 보험 기초 이론, 금융 상품의 가격 결정 과정과 금융 데이터 분석을 통해 미래의 전문 금융인이 되기 위한 이해력을 기른다.",
        ],
      ],
    },
  ];
  return (
    <>
      <NavBar />
      <div className="container-fluid overflow-auto">
        <Major
          collegeName={college[Number(num.id) - 1].collegeName}
          collegeImg={college[Number(num.id) - 1].collegeImg}
          collegeDescription={college[Number(num.id) - 1].collegeDescription}
          majors={college[Number(num.id) - 1].major}
        />
      </div>
    </>
  );
}

export default MajorInfo;
