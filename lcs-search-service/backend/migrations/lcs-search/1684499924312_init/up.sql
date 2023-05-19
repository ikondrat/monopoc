SET check_function_bodies = false;
CREATE TABLE public.places (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    website text,
    phone_number text,
    name text NOT NULL,
    address text NOT NULL,
    working_hours json
);
COMMENT ON TABLE public.places IS 'Contains places';
ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_pkey PRIMARY KEY (uuid, name, address);
ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_uuid_key UNIQUE (uuid);
