SET check_function_bodies = false;
CREATE TABLE public.addresses (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    address text NOT NULL,
    postcode text NOT NULL,
    city text NOT NULL,
    "countryCode" text NOT NULL
);
COMMENT ON TABLE public.addresses IS 'Contains addresses fro places';
CREATE TABLE public.places (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    website text NOT NULL,
    phone_number text NOT NULL,
    address text NOT NULL,
    working_hours_id uuid,
    name text NOT NULL
);
COMMENT ON TABLE public.places IS 'Contains places';
CREATE TABLE public.working_hours (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    monday text,
    tuesday text,
    wednesday text,
    thursday text,
    friday text,
    saturday text,
    sunday text
);
COMMENT ON TABLE public.working_hours IS 'Table describes working hours ranges';
ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_address_key UNIQUE (address);
ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (uuid, address);
ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_pkey PRIMARY KEY (uuid, name);
ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.working_hours
    ADD CONSTRAINT working_hours_pkey PRIMARY KEY (uuid);
ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_working_hours_id_fkey FOREIGN KEY (working_hours_id) REFERENCES public.working_hours(uuid) ON UPDATE SET NULL ON DELETE SET NULL;
