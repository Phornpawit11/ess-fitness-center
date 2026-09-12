import { Component } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  template: `
    <section>
      <p class="font-bold text-[var(--color-primary)]">Membership access</p>
      <h1 class="m-0">QR Code</h1>
      <p>Show this screen when checking in at the fitness center.</p>
      <div aria-label="Membership QR code placeholder" class="mt-8 aspect-square w-48 bg-[repeating-conic-gradient(#18221d_0_25%,#fff_0_50%)] bg-size-[2rem_2rem]"></div>
    </section>
  `
})
export class Qrcode {}