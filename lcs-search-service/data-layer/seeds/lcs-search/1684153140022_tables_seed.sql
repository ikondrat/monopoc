SET check_function_bodies = false;
INSERT INTO public.addresses (uuid, address, postcode, city, "countryCode") VALUES ('73305058-906c-49c4-a605-5d9bff0cf735', 'Salamanderweg 67', '8134', 'Adliswill', 'CH');
INSERT INTO public.working_hours (uuid, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES ('35313a7e-e398-4711-a75a-0db71812a050', '09:00-12:00, 13:00-18:00', '09:00-12:00, 13:00-18:00', '09:00-12:00, 13:00-18:00', '09:00-12:00, 13:00-18:00', '09:00-12:00, 13:00-18:00', NULL, NULL);
INSERT INTO public.places (uuid, website, phone_number, address_id, working_hours_id, name) VALUES ('5d531201-6549-448d-b32d-d8f5f713c207', 'restaurant-ilgrappolo.ch', '+41444817060', '73305058-906c-49c4-a605-5d9bff0cf735', '35313a7e-e398-4711-a75a-0db71812a050', 'Il Grappolo');
