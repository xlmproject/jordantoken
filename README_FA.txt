JORDAN TOKEN — بسته آماده Cloudflare Pages

محتویات:
- index.html: صفحه اصلی وب‌سایت
- styles.css و script.js: طراحی واکنش‌گرا، انیمیشن‌ها و منوی موبایل
- assets/jordan-token-logo.png: لوگوی 3D بسکتبالی با پس‌زمینه شفاف
- assets/arena-court.jpg: تصویر فضای استادیوم و زمین بسکتبال
- .well-known/stellar.toml: شناسنامه قابل دسترسی در مسیر استاندارد SEP-1
- _headers: فعال‌سازی CORS برای stellar.toml

بارگذاری:
1) فایل ZIP را از حالت فشرده خارج کنید.
2) پوشه jordan_token_site یا تمام محتویات آن را در پروژه Cloudflare Pages بارگذاری کنید.
3) پس از انتشار، این دو نشانی را بررسی کنید:
   https://jordantoken.pages.dev/
   https://jordantoken.pages.dev/.well-known/stellar.toml
4) برای اتصال دامنه به حساب Stellar، مقدار Home Domain حساب صادرکننده را با دامنه زیر تنظیم کنید:
   jordantoken.pages.dev

اطلاعاتی که در پروژه قرار گرفته:
- نام نمایشی: Jordan Token
- کد دارایی درج‌شده: JORDAN (بر اساس نام؛ باید با کد واقعی روی شبکه تطبیق داده شود)
- شبکه: Stellar Mainnet
- ایژور: GBZUDFR6JYPCOLOH5IXHFJRDSDFBPDON7PMBROM4L6ZYPVXNDSMWSXLM
- قیمت مرجع نمایشی: 0.0000001 XLM (طبق پیام شما؛ قیمت زنده بازار نیست)
- دکمه اصلی: صفحه اطلاعات دارایی در StellarExpert را باز می‌کند؛ این صفحه، صفحه صرافی یا تضمین امکان معامله نیست.

نکته مهم درباره Stellar.toml:
استاندارد SEP-1 از صادرکننده می‌خواهد دقیقاً یکی از سیاست‌های عرضه fixed_number، max_number یا is_unlimited را مشخص کند. چون سیاست واقعی عرضه را اعلام نکرده‌اید، آن را حدس نزده‌ام؛ پس از تأیید وضعیت واقعی توکن، فقط گزینه درست را در فایل stellar.toml اضافه کنید. همچنین مطمئن شوید کد واقعی دارایی JORDAN است.
