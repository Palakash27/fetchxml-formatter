export const exampleString = `Paste fetchXML here

<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
  <entity name="contact">
    <attribute name="fullname" />
    <attribute name="telephone1" />
    <attribute name="emailaddress1" />
    <attribute name="contactid" />
    <order attribute="fullname" descending="false" />
    <filter type="and">
      <condition attribute="ownerid" operator="eq-userid" />
      <condition attribute="statecode" operator="eq" value="0" />
    </filter>
  </entity>
</fetch>`;
