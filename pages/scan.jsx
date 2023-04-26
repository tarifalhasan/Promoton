import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import Layout from '@/components/Layout';

export default function QrCodeScanner() {
  const [data, setData] = useState(null);
  const [isPaid, seIsPaid] = useState(false);
  const [isNotPaid, seIsNotPaid] = useState(false);
  const qrcodeRef = useRef(null);

  useEffect(() => {
    const html5Qrcode = new Html5Qrcode('qrcode-reader');
    html5Qrcode.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: 250 },
      // qrCodeMessage => {
      //   console.log(`QR code detected: ${qrCodeMessage}`);
      //   setData(qrCodeMessage);

      //   if (
      //     qrCodeMessage ==
      //     '✅ Pago! Valor Pago: R$ 90,00 Data do Pagamento: 10/10/23 Horário do Pagamento: 13:12:06'
      //   ) {
      //     seIsPaid(true);
      //   } else if (qrCodeMessage == '❌ Não Pago! Valor em Aberto: R$ 90,00') {
      //     seIsNotPaid(true);
      //   }
      // },
      errorMessage => {
        console.log(`Error: ${errorMessage}`);
      }
    );
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div
          id="qrcode-reader"
          className="mx-auto bg-no-repeat "
          ref={qrcodeRef}
        ></div>
      </div>
    </Layout>
  );
}
