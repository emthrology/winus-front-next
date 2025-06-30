import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#e7eaf5] font-pretendard text-[#23263b]">
      <section className=" bg-[#e7eaf5] px-6 sm:px-32 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          개인정보처리방침
        </h1>
        <p className="mb-8 text-sm text-center text-[#5e5e7b]">
          **주식회사 윈어스(이하 &quot;회사&quot;라 함)** 가 운영하는 개인정보
          보호 및 관련 법령에 따라
          <br /> 이용자의 개인정보를 안전하게 보호하고 적절히 관리하기 위해
          다음과 같이 개인정보처리방침을 수립·공개합니다.
        </p>
        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          {`제 1조\n (개인정보의 수집 항목 및 이용 목적)`}
        </h2>
        <p className="my-4 text-sm text-left text-[#5e5e7b]">
          회사는 다음과 같은 항목의 개인정보를 수집·이용합니다.
        </p>
        <table className="w-full text-sm mb-6 border border-[#d2d5e3]">
          <thead>
            <tr className="bg-[#f4f6fa]">
              <th className="py-2 px-2 border border-[#d2d5e3]">구분</th>
              <th className="py-2 px-2 border border-[#d2d5e3]">수집 항목</th>
              <th className="py-2 px-2 border border-[#d2d5e3]">이용목적</th>
              <th className="py-2 px-2 border border-[#d2d5e3]">보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-2 border border-[#d2d5e3]">문의접수</td>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                이름, 이메일, 전화번호(선택),문의 내용
              </td>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                고객 문의 상담 및 대응
              </td>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                수집일로부터 1년간 보관 후 파기
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 border border-[#d2d5e3]">서비스 제공</td>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                이름, 연락처, 소속(필요 시)
              </td>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                서비스 제공 및 운영
              </td>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                서비스 제공 종료 시까지
              </td>
            </tr>
          </tbody>
        </table>
        <p className="my-4 text-sm text-center text-[#5e5e7b]">
          ※ 귀하께서는 개인정보 수집 및 이용에 대한 동의를 거부하실 수 있으며,
          이 경우 문의 접수가 제한될 수 있습니다.
        </p>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          제 2조 (개인정보의 제3자 제공)
        </h2>
        <p className="mb-4 text-sm">
          회사는 이용자의 개인정보를 외부에 제공하지 않으며, 다음의 경우에만
          예외적으로 제공할 수 있습니다.
        </p>
        <p className="mb-4 text-sm">
          1. 정보주체의 사전 동의가 있는 경우
          <br />
          2. 법령에 따라 제공이 요구되는 경우
          <br />
          3. 생명, 신체, 재산에 대한 긴급한 위험을 방지하기 위한 경우
        </p>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          제 3조 (개인정보 처리의 위탁)
        </h2>
        <p className="my-4 text-sm text-left text-[#5e5e7b]">
          회사는 원활한 서비스 제공을 위해 개인정보 처리 업무를 외부 전문업체에
          위탁할 수 있으며,
          <br /> 이 경우 사전에 해당 내용을 고지하고 필요한 계약을 체결하여
          개인정보가 안전하게 처리되도록 관리합니다.
        </p>
        <table className="w-full text-sm mb-6 border border-[#d2d5e3]">
          <thead>
            <tr className="bg-[#f4f6fa]">
              <th className="py-2 px-2 border border-[#d2d5e3]">수탁업체</th>
              <th className="py-2 px-2 border border-[#d2d5e3]">
                위탁 업무 내용
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                웹사이트 개발 및 운영 대행사
              </td>
              <td className="py-2 px-2 border border-[#d2d5e3]">
                홈페이지 유지보수 및 관리 시스템 운영
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          제 4조 (개인정보의 보유 및 파기)
        </h2>
        <p className="mb-4 text-sm">
          1. 수집된 개인정보는 보유 기간 경과 또는 처리 목적 달성 시 지체 없이
          안전한 방법으로 파기됩니다.
          <br />
          2. 전자적 파일은 복원이 불가능한 기술적 방법으로 삭제하며, 종이 문서는
          분쇄하거나 소각하여 폐기합니다.
        </p>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          {`제 5조\n (이용자 및 법정대리인의 권리와 행사 방법)`}
        </h2>
        <ul className="mb-4 text-sm space-y-1">
          <li>
            이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리
            정지를 요청할 수 있으며,
            <br /> 회사는 이에 신속히 조치합니다. 권리 행사는 서면, 이메일, 전화
            등으로 접수 가능합니다.
          </li>
        </ul>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          제 6조 (개인정보의 안전성 확보 조치)
        </h2>
        <p className="mb-4 text-sm">
          회사는 개인정보 보호를 위해 다음과 같은 기술적·관리적 조치를
          시행합니다.
        </p>
        <ol className="list-decimal ml-5 mb-4 text-sm space-y-1">
          <li>개인정보 접근 제한 및 담당자 최소화</li>
          <li>보안 프로그램 설치 및 주기적 점검</li>
          <li>암호화 저장 및 전송</li>
          <li>정기적 교육 실시</li>
        </ol>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          제 7조 (개인정보 보호책임자)
        </h2>
        <ul className="list-disc ml-5 mb-4 text-sm space-y-1">
          <li>성명: 윤온유</li>
          <li>직책: 개인정보 보호책임자</li>
          <li>연락처: 010-7264-1003</li>
          <li>이메일: cat2032032@wewinus.com</li>
        </ul>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          제 8조 (권익침해 구제방법)
        </h2>
        <p className="mb-4 text-sm">
          개인정보 침해로 인한 피해구제를 위해 아래 기관에 문의하실 수 있습니다.
        </p>
        <ul className="list-disc ml-5 mb-4 text-sm space-y-1">
          <li>개인정보침해신고센터 (privacy.kisa.or.kr / ☎ 118)</li>
          <li>개인정보분쟁조정위원회 (www.kopico.go.kr / ☎ 1833-6972)</li>
          <li>대검찰청 사이버수사과 (www.spo.go.kr / ☎ 1301)</li>
          <li>
            경찰청 사이버범죄 신고시스템 (cyberbureau.police.go.kr / ☎ 182)
          </li>
        </ul>

        <h2 className="font-bold mt-8 mb-2 text-2xl sm:text-3xl whitespace-pre-line">
          제 9조 (개인정보 처리방침 변경)
        </h2>
        <p className="text-sm">
          이 개인정보처리방침은 2025년 6월 9일부터 적용되며, 내용 변경 시
          홈페이지를 통해 사전 고지합니다.
        </p>
      </section>
    </div>
  );
}
